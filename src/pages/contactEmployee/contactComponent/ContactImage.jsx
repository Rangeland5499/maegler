import contactImage from "./contactImage/contactImage.png"

const ContactImage = () => {
    return ( 
        <section>
            <img src={contactImage} alt="" className="brightness-50" />
            <div className="absolute text-white -mt-28 left-1/2 -translate-x-1/2 ">
            <p className="text-h3 font-bold ">Kontakt en medarbejder</p>
            </div>

        </section>
     );
}
 
export default ContactImage;