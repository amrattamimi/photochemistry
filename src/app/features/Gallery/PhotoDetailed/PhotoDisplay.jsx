import React, { Fragment } from "react";
import { Segment, Image, Item, Header, Button, List, GridColumn } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { objectToArray } from "../../../common/utils/helpers";
import { format } from "date-fns/esm";
import LikedByList from "../galleryList/LikedByList";


//passing down the props
const PhotoDisplay = ({
  photo,
  deletePhoto,
  hasLiked,
  isOwner,
  likePhoto,
  unlike,
  authenticated,
}) => {
  return (
    <Segment.Group>
      <Segment basic attached='top'>
        <Image src={`${photo.PhotoURL}`} fluid />

        <Segment basic>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header style={{ fontSize: "50px", color: "#4267B2" }}>
                  - {photo.title} -
                </Header>
                <p>
                  Photo uploaded :
                  {photo.created &&
                    format(photo.created.toDate(), "EEEE do LLLL yyy")}
                </p>
                <p>
                  <GridColumn style={{ color: "black"}} as={Link} to={`/profile/${photo.takenByUid}`}>
                  Taken by <strong> {photo.takenBy}</strong>
                
                </GridColumn>
                </p>
                
                <p> Editions: {photo.editions}</p>
                <List horizontal>
                  {photo.likedBy &&
                    objectToArray(photo.likedBy).map((likedBy) => (
                      <LikedByList key={likedBy.id} likedBy={likedBy} />
                    ))}
                </List>
                <p>
                  {photo.likedBy && objectToArray(photo.likedBy).length}

                  {photo.likedBy && objectToArray(photo.likedBy).length === 1
                    ? " Person added this photo as favourite"
                    : " People added this photo as favourite"}
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached='bottom' clearing>
        {authenticated && (
          <Fragment>
            {hasLiked ? (
              <Button onClick={() => unlike(photo)}>
            
                Remove from favourites
              </Button>
            ) : (
              <Button onClick={() => likePhoto(photo)} color='facebook'>
             
                Add to favourites
              </Button>
            )}
          </Fragment>
        )}

        {isOwner && (
          <Fragment>
            <Button
              color='red'
              as={Link}
              to={`/gallery`}
              onClick={() => deletePhoto(photo.id)}
            >
              Delete Photo
            </Button>

            <Button
              as={Link}
              to={`/manage/${photo.id}`}
              color='orange'
              floated='right'
            >
              Edit photo
            </Button>
          </Fragment>
        )}
      </Segment>
    </Segment.Group>
  );
};

export default PhotoDisplay;
