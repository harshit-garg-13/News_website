import React, { Component } from 'react'
import NewItems from './NewItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
       static defaultProps={
        country:"in",
        category:"sports",
        name:"Latest News"
       }
       static propTypes={
        country:PropTypes.string,
        category:PropTypes.string,
        name:PropTypes.string
       }


      constructor(props){
        super(props);
        this.state={
            articles:[],
            loading:false,
            page:1,
            totalResults:0
        }
        document.title=`${this.props.category}-news`;

      }
      async update(){
        this.props.setProgress(10);
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0ba11dd3ec1b4ed6b096855d866d3145&page=${this.state.page}&pageSize=20`;
        this.setState({loading:true});
        this.props.setProgress(30);
        let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
          this.props.setProgress(100);
      }
      async componentDidMount(){
        // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0ba11dd3ec1b4ed6b096855d866d3145&page=1&pageSize=20`;
        // this.setState({loading:true});
        // fetch(url).then((res) => res.json())
        // .then((jsohn) => {
        //     this.setState({
        //         articles: jsohn.articles,
        //         loading: false,
        //         totalResults:jsohn.totalResults
        //     });
        // });
        // let parseData=(await data).json();
        // //console.log(parseData);
        // this.setState({articles:parseData.articles})
        this.update();
      }
      handlePre=async()=>{
        // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0ba11dd3ec1b4ed6b096855d866d3145&page=${this.state.page-1}&pageSize=20`;
        // this.setState({loading:true});
        // fetch(url).then((res) => res.json())
        //   .then((jsohn) => {
        //       this.setState({
        //           articles: jsohn.articles,
        //           loading: false,
        //           page:this.state.page-1
        //       });
        //   });
     await   this.setState({page:this.state.page -1})
        this.update();
      }
      handleNext=async()=>{
       
          
        // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0ba11dd3ec1b4ed6b096855d866d3145&page=${this.state.page+1}&pageSize=20`;
        // this.setState({loading:true});
        // fetch(url).then((res) => res.json())
        //   .then((jsohn) => {
        //       this.setState({
        //           articles: jsohn.articles,
        //           loading: false,
        //           page:this.state.page+1
        //       });
        //   });
       await this.setState({page:this.state.page +1})
        this.update();
      }
      fetchMoreData = async() => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
      this.setState({page:this.state.page+1})
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0ba11dd3ec1b4ed6b096855d866d3145&page=${this.state.page+1}&pageSize=20`;
 
        fetch(url).then((res) => res.json())
          .then((jsohn) => {
              this.setState({
                  articles: this.state.articles.concat(jsohn.articles),
              
                  //page:this.state.page-1
                  totalResults:jsohn.totalResults
              });
          });

      };
    
  render() {


    return (
      <>
       
          <h1 className="text-center">{this.props.name}</h1>
          {this.state.loading && <Spinner/>}
       
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length<this.state.totalResults}
          loader={<h4><Spinner/></h4>}
        >
          <div className="container">
             <div className="row">
            {/*!this.state.loading &&*/ this.state.articles?.map((element)=>{
              return <div className="col md-4" key={element.url}> 
               <NewItems title={element.title} description={element.description} imageurl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source}/>
               </div>
            })
            }
            
            </div>
            </div>
            </InfiniteScroll>
           
            {/* <div className="d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePre}>&larr; Previous</button>
          
            <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)}type="button" className ="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
            </div> */}
          
     
        
        </>
       
     
    )
  }
}
