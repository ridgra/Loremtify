import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <>
        <div className="col-3 p-1">
          <div className="card text-center">
            <img
              className="card-img-top w-100 d-block"
              src={this.props.image}
              width="100%"
            />
            <div className="card-body p-0">
              <h6 className="text-muted card-subtitle my-2">Title</h6>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
