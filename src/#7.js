// 7. Image Gallery App
import React from 'react';
class ImageGallery extends React.Component {
    constructor(props){
        super(props)
        this.state = { links:props.links }
        this.delete = this.delete.bind(this)

    }
   
    delete = (id) =>{
        const {links} = this.state
        const newLinks = links.splice(id, 1)
      
        this.setState({link:newLinks})
      

    }

    render() {

        const {links}= this.state
     return(
       <div>
         {links.map((item, id) => (
          <div class='image' key={id}>
              <img src={item} style={{width:'5rem'}}/> 
              <button onClick={() => {
                  this.delete(id)
               }
              } >x</button>
          </div>
         ))}
         <div>
         <p>--------------#7-Image Gallery App-------------</p>
         </div>
       </div>
         )
     }
}
  

export default ImageGallery;