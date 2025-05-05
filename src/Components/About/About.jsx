import image from "../About/bookshop.jpg"

const About = () => {
    return (
        <div className="grid md:grid-cols-2 p-10 gap-4">
           <div>
                <img src={image} alt="" />
           </div>
           <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque odit quisquam commodi asperiores vero nostrum consequuntur temporibus rerum necessitatibus ipsum, laudantium eveniet aliquid maiores eos ullam assumenda possimus provident itaque optio minus veniam iusto fuga soluta animi? Tempore, aut? Consectetur iure doloremque ut exercitationem voluptas fugiat saepe voluptates doloribus asperiores.</p>
           </div>
        </div>
    );
};

export default About;