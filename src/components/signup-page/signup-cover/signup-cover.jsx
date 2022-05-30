import UserTestimonial from '../../../assets/User Testimonial.svg'

const SignUpCover = () => {
    return(
         <aside className="aside-signin-cover">
             <q className="aside__quote">
                  "YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and added."
             </q>
             <div className="quote-author">
                 <figure>
                     <img className="author__picture" src={UserTestimonial} alt="User testimonial picture" />
                 </figure>
                 <div>
                     <h2 className="author__name">May Andrews</h2>
                     <h3 className="author__hobby">Professional Hiker</h3>
                 </div>
             </div>
         </aside>
    )
}

export default SignUpCover;