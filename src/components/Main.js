import React from 'react';
import Card from './Card';
import Navbar from './Navbar';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
    };
  }

  fetchImg() {
    console.log('aaa');
    fetch('https://picsum.photos/500').then((res) => {
      const newImages = this.state.images.concat(res.url);
      this.setState({
        images: newImages,
      });
    });
  }

  componentDidMount() {
    for (let i = 0; i < 8; i++) {
      this.fetchImg()
    }
  }

  render() {
    return (
      <div>
        <Navbar fetchImg={() => this.fetchImg()} />
        <main className="mt-3">
          <div className="container">
            <div className="row">
              {this.state.images.map((image, idx) => {
                return <Card key={idx} image={image} />;
              })}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
