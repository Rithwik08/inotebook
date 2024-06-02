import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    pageSize: 10,
  };
  static propTypes = {
    pageSize: PropTypes.number,
  };
  articles = [
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Polly Thompson",
      title:
        "China takes on Elon Musk's Starlink with hundreds of low-orbit satellites",
      description:
        "A Chinese company plans to launch the first in a network of 300 very-low-earth-orbit satellites in December.",
      url: "https://www.businessinsider.com/china-elon-musk-starlink-low-orbit-satellites-2023-11",
      urlToImage:
        "https://i.insider.com/655751d222cf74a573991cc7?width=1200&format=jpeg",
      publishedAt: "2023-11-17T14:03:12Z",
      content:
        "A Long March-2C carrier rocket blasts off from the Jiuquan Satellite Launch Center.Xinhua/Getty Images\r\n<ul><li>China is taking the competition to Elon Musk in the space race. </li><li>China will lau… [+2274 chars]",
    },
    {
      source: {
        id: null,
        name: "Boing Boing",
      },
      author: "David Pescovitz",
      title: "Mysterious glass found in desert may be from space",
      description:
        "The Great Sand Sea is a 72,000 km desert between western Egypt and eastern Lybia in the Sahara. If you visit, you may be lucky enough to find a piece of bizarre yellow glass like the samples above. A very unusual glass due to its high silica content, this rar…",
      url: "https://boingboing.net/2023/12/05/mysterious-glass-found-in-desert-may-be-from-space.html",
      urlToImage:
        "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/12/glassssss.webp?fit=1200%2C675&ssl=1",
      publishedAt: "2023-12-05T22:19:04Z",
      content:
        "The Great Sand Sea is a 72,000 km desert between western Egypt and eastern Lybia in the Sahara. If you visit, you may be lucky enough to find a piece of bizarre yellow glass like the samples above. A… [+1422 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      article: this.articles,
      loading: false,
      page: 1,
    };
  }
  async updateNews(pageNo) {
    let url = `https://newsapi.org/v2/everything?q=remote+sensing+science&apiKey=be50d974f1f04026bd3e3f7e329fd349&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  async componentDidMount() {
    this.updateNews();
  }
  handlePrevClick = async () => {
    // console.log("Previous");
    //let url = `https://newsapi.org/v2/everything?q=remote+sensing+science&apiKey=be50d974f1f04026bd3e3f7e329fd349&page=${
    //this.state.page - 1
    //}&pageSize=${this.props.pageSize}`;
    //let data = await fetch(url);
    //let parsedData = await data.json();
    //console.log(parsedData);
    //this.setState({
    //page: this.state.page - 1,
    //article: parsedData.articles,
    // });
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  handleNextClick = async () => {
    //if(this.state.page + 1 > Math.ceil(this.state.totalResults/10)){

    //}
    //else{
    //console.log("Next");
    //let url = `https://newsapi.org/v2/everything?q=remote+sensing+science&apiKey=be50d974f1f04026bd3e3f7e329fd349&page=${
    //this.state.page + 1
    //}&pageSize=${this.props.pageSize}`;
    //let data = await fetch(url);
    // let parsedData = await data.json();
    //console.log(parsedData);
    //this.setState({
    //page: this.state.page + 1,
    //article: parsedData.articles,
    //});

    //}
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center" style={{ margin: "35px 0px" }}>
            ResLearning - Top Headlines
          </h1>

          <div className="row">
            {this.state.article.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    Title={element.title}
                    Description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="d-flex justify-content-evenly">
          <button
            type="button"
            className="btn btn-dark my-3"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-dark my-3"
            onClick={this.handleNextClick}
          >
            Next
          </button>
        </div>
      </>
    );
  }
}

export default News;
