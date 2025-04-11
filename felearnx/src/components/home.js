import React from 'react'
import '../css/home.css'
import { motion } from 'framer-motion';


function Home() {
    return (
        <div className='home-container'>
            <br /><br />
            <div className='home-thumbnail'>
                <motion.img
                    src="./images/background.jpg"
                    alt=""
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                />
                <div className='home-slogan-box poppins-semibold'>
                    <motion.span layout className="home-slogan"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 3 }}>
                        Illuminate Your Future <br />With Technology <br /><br /><br />
                    </motion.span>
                    <motion.span
                        className='home-sub-slogan'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 3 }}>
                        Join the world's most widely popular education website
                    </motion.span>
                </div>
                <button className='home-btn-accessAI poppins-semibold'>Try LearnX AI</button>
            </div>
            <div className='home-course-area'>
                <span className='home-course-title poppins-semibold'>1000+ Courses</span>
                <span className='home-course-detail lato-regular'>
                    With our courses, you can gain valuable experiences and skills.
                </span>
            </div>
            <div className='home-course-img-container'>
                <div className="home-course-glow"></div>
                <div className="home-course-glow2"></div>
                <div className='home-course-img'>
                    <img src="images/screenshot_course.png" alt="Course" className='course-image' />
                </div>
            </div>
            <div className='home-course-description'>
                <table className='home-table-description lato-regular'>
                    <tbody>
                        <tr>
                            <td className='h-t-des-column col-3'>
                                <div>
                                    <span className='h-t-des-title'>Flexibility and Convenience. </span>
                                    <span className='h-t-des-content'>
                                        You can learn anytime, anywhere, at your own pace—perfect for balancing with work,
                                        school, or other responsibilities
                                    </span>
                                </div>
                            </td>
                            <td className='h-t-des-column col-3'>
                                <div>
                                    <span className='h-t-des-title'>Wide Variety of Topics. </span>
                                    <span className='h-t-des-content'>
                                        Online platforms offer courses on almost anything—from coding and
                                        design to personal development and cooking—often with different difficulty levels                                    </span>
                                </div>
                            </td>
                            <td className='h-t-des-column col-3'>
                                <div>
                                    <span className='h-t-des-title'>Cost-Effective Learning. </span>
                                    <span className='h-t-des-content'>
                                        Many online courses are free or much cheaper than traditional classes,
                                        and some even offer certifications to boost your resume
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='home-course-area'>
                <span className='home-course-title poppins-semibold'>Work With AI</span>
                <span className='home-course-detail lato-regular'>
                    LearnX AI offers helps analyze massive datasets quickly, providing insights and predictions that lead to smarter, faster decisions
                </span>
            </div>
            <div className='home-ai-img-container'>
                <div className='h-ai-container'>
                    <div className='h-ai-des-container poppins-medium'>
                        <span className='h-ai-des-title'>Instant feedback in seconds.
                            <span className='h-ai-des-content'> Spend less time fixing vulnerabilities and more time building features with LearnX AI.</span>
                        </span>
                        <span className='h-ai-des-toAIPage'>
                            Explore LearnX AI
                        </span>
                    </div>
                    <div className='home-ai-diamond-shape'></div>
                    <div className='home-ai-img'>
                        <img src="images/screenshot_course.png" alt="Course" className='course-image' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home