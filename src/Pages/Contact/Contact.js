import React ,{useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_71e95sh', 'template_tbpydqp', form.current, 'hDfK-hPS5bTdWhPs6')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id="contact" className='' style={{ "backgroundColor": "#6F1E51" }}>

            <div>
                <h1 className='text-5xl text-white font-bold'>CONTACT</h1>
            </div>
            <div className="flex justify-center">
                <div class="card w-96  shadow-xl " style={{"backgroundColor":"#6F1E51"}}>
                    <div class="card-body">
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="name" placeholder="Name" class="input input-bordered input-info w-full max-w-xs" />

                            <input type="email" name="user_email" placeholder="Email" class="input input-bordered input-info w-full max-w-xs my-4" />

                            <textarea class="textarea textarea-info w-full max-w-xs" name="message" placeholder="Message"></textarea>

                            <input type="submit" value="send message" class="input input-bordered input-info w-full max-w-xs" />

                            {/* <div class="card-actions justify-center">
                            <button type='submit' class="btn btn-primary">Buy Now</button>
                        </div> */}
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;