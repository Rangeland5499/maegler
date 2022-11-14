import contact from "./contactImage/contact.png";
const About = () => {
    return ( 
    <section >
        <section className="flex mb-10">
        <img src={contact} alt="" />
        <aside className="flex flex-col ml-8">
            <h5 className="font-bold text-h5">Peter Sørensen</h5>
            <h5>Statsautoriseret ejendomsmægler</h5>
            <hr className="w-1/4 h-[2px] bg-primary1 my-4"/>
            <article className="flex">
            +45 7070 4012
            </article>
            <article className="flex">
            peter@dinmaegler.com
            </article>

        </aside>
        </section>
        <section className="mb-10">
            <h4 className="font-bold text-xl">Om Peter Sørensen</h4>
            <hr className="w-[60px] h-[4px] bg-primary1 my-4" />
            <p className="w-full text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <p className="w-full text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour.</p>
        </section>


    </section> );
}
 
export default About;