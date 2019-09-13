import React, {Component} from 'react';
import Title from "./Title";
import Instawall from "./Instawall";
import AddPhoto from "./AddPhoto";
import {Route} from 'react-router';

class Main extends Component {
    /*
    * 1st lifecycle method is constructor method, never include any sideeffect logic in constructor
    * */
    constructor(){
        super();
        this.state={
            posts: [{
                id: "0",
                description: "beautiful landscape",
                imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                "3919321_1443393332_n.jpg"
            }, {
                id: "1",
                description: "Aliens",
                imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
                "08323785_735653395_n.jpg"
            }, {
                id: "2",
                description: "On a vacation!",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
            }],
        };

        /* this bind function is useful because the value of this is `undefined` when
         * its used in another function which gets called from some other component
         * e.g. when removePhoto function below is called from another component then
         * this will point to undefined and in our case we cannot make use of this.setState
         * unless we stay in the current context of component
        */

        this.removePhoto = this.removePhoto.bind(this);
    }

    /* this is 2nd lifecycle method which gets invoked after component is inserted in the DOM */
    /* this calls the render method again after executing the functions, statements located inside it */
    /* want to fetch data from database? make sure its in componentDidMount */
    componentDidMount(){

    }

    // /* 3rd lifecycle method (Depreceated) */
    // componentWillMount(){
    //     /* this lifecycle method gets invoked before the render method gets called so best is to make use of
    //     * componentDidMount() above
    //     * */
    // }

    /* 4th lifecycle method
    * this gets call whenever component is re-rendered or when we update the state of the component to trigger re-render
    * componentDidMount is a latest alternative for componentWillMount
    *
    * It also has two properties, prevProps and prevState which is inbuilt in react
    * */
    componentDidUpdate(prevProps,prevState){
        // console.log("re-rendered");
        //         // console.log(prevState.posts);
        //         // console.log(this.state);
    }

    /*
    * send this function as reference to Instawall to delete photo
    * */
    removePhoto(postRemoved){
        this.setState((state)=>({
            posts: state.posts.filter(post => post!==postRemoved)
        }));
        console.log(postRemoved.description);
    };

    /* render method should never make any ajax calls or such calling rest calls, it should only handle components to render on the dom */
    render(){
        return(
            <div>
                {/* exact keyword here denotes the fact that we want to exactly match the routes, had there been no
                *exact keyword here, then 'slash' after path will match both the url "/" and also "/AddPhoto" which
                * wouldn't have rendered our pages in right way
                * */}
                <Route exact path="/" render={()=> <div>
                        <Title title={"Instawall"}/>
                        <Instawall
                            posts={this.state.posts}
                            onRemovePhoto={this.removePhoto}
                            onNavigate={this.navigate}
                        />
                    </div>
                }/>

                {/*component based render method*/}
                <Route path="/AddPhoto" component={AddPhoto}/>
            </div>
        );
    }
}

// const simulateFetchFromDatabase = () => {
//     return[{
//         id: "0",
//             description: "beautiful landscape",
//         imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
//     "3919321_1443393332_n.jpg"
//     }, {
//         id: "1",
//             description: "Aliens",
//             imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
//         "08323785_735653395_n.jpg"
//     }, {
//         id: "2",
//             description: "On a vacation!",
//             imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
//     }]
// };

export default Main;
