import ContactImage from "./contactComponent/ContactImage";
import SearchProperty from "./contactComponent/Search";
import CallUs from "./contactComponent/CallUs";
import ContactForm from "./contactComponent/ContactForm";
import About from "./contactComponent/About";

const ContactUs = () => {
    return ( 
    <section>
        <ContactImage/>
        <section className="flex flex-cols-2 mt-20 w-1/3 justify-center mx-auto mb-20">
        <section  className="w[730px] border border-gray-200 p-6">
        <About/>
        <ContactForm/>
        </section>
        <aside className="ml-8">
        <SearchProperty/>
        <CallUs/>
        </aside>
        
        </section>

    </section> );
}
 
export default ContactUs;