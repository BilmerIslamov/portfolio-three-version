import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Context = createContext();

export const ControlNotes = ({ children }) => {
    // common useState \\
    const [userName, setUserName] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [open_1, setOpen_1] = useState(true);
    const [open_2, setOpen_2] = useState(false);
    const [open_3, setOpen_3] = useState(false);
    const [open_4, setOpen_4] = useState(false);
    const [Alert_plus, setAlert] = useState(false);
    const [InfoAlert, setInfoAlert] = useState(false);
    const [SentAlert, setSentAlert] = useState(false);
    const [Scrolls_1, setScrolls_1] = useState(0);
    const [Scrolls_2, setScrolls_2] = useState(0);
    const [Scrolls_3, setScrolls_3] = useState(0);
    const [scroll_star_1, setScroll_star_1] = useState(false);
    const [scroll_star_2, setScroll_star_2] = useState(false);
    const [scroll_star_3, setScroll_star_3] = useState(false);
    const [scroll_star_4, setScroll_star_4] = useState(false);
    const [scroll_star_5, setScroll_star_5] = useState(false);
    const [CopyMessage, setCopyMessage] = useState(false);
    const [Disable, setDisable] = useState(false);
    // common useState \\
    
    // the code portfolio
    const onChangeEmail = (e) => { setUserEmail(e.target.value); e.preventDefault();};
    const onChangeName = (e) => { setUserName(e.target.value); e.preventDefault();};
    const onChangeNumber = (e) => { setUserPhone(e.target.value); e.preventDefault();};
    const onChangeMessage = (e) => {  setUserMessage(e.target.value);  e.preventDefault();};
    // btn
    const OnActiveInfo = () => { setInfoAlert(true); setTimeout(() => {setInfoAlert(false);}, 1500);}
    // send mail
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        if (userName.trim() !== '' && userPhone.trim() !== '' && userEmail.trim() !== '' && userMessage.trim() !== '') { emailjs.sendForm("service_ptb0v2h", "template_z2c7w6q", form.current, "Er1a7Rkkn-N0YIJ-m")
            .then((result) => { console.log(result.text); console.log("hello");},(error) => { console.log(error.text); console.log("none");});
            setTimeout(() => {setSentAlert(true);}, 2000);
            setTimeout(() => {setSentAlert(false);}, 4500);
            setTimeout(() => { setUserName(''); setUserPhone(''); setUserEmail(''); setUserMessage(''); }, 2000);
        }
        else {
            setAlert(true);
            document.getElementById("sentMail").setAttribute("disabled", "");
            document.getElementById("sentMail").style.background = "#6c6c6c";
            setTimeout(() => { setAlert(false); document.getElementById("sentMail").removeAttribute("disabled", ""); document.getElementById("sentMail").style.background = "#fff";}, 2500);
        }
    };
    const OnReset = () => { setUserName(""); setUserPhone(""); setUserEmail(""); setUserMessage("");};
    // tab open // close
    const Tabs_1 = () => { setOpen_1(!open_1); setOpen_2(false); setOpen_3(false); setOpen_4(false);};
    const Tabs_2 = () => { setOpen_2(!open_2); setOpen_1(false); setOpen_3(false); setOpen_4(false);};
    const Tabs_3 = () => { setOpen_3(!open_3); setOpen_1(false); setOpen_2(false); setOpen_4(false);};
    const Tabs_4 = () => { setOpen_4(!open_4); setOpen_1(false); setOpen_2(false); setOpen_3(false);};
    // sctoll effect \\
    const listenToScroll = () => {
        let heightToHidden_1 = 3800;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        if (winScroll > heightToHidden_1) { setScrolls_1(1); setScrolls_2(18); setScrolls_3(0);}
        else { setScrolls_1(0); setScrolls_2(0); setScrolls_3(0);}
    }
    useEffect(() => {window.addEventListener("scroll", listenToScroll)}, [])
    // scroll effect \\
    const starScroll = () => {
        let heightToHidden_1 = 4700;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        if (winScroll > heightToHidden_1) { setScroll_star_1(true); setScroll_star_2(true); setScroll_star_3(true); setScroll_star_4(true); setScroll_star_5(true);}
        else { setScroll_star_1(false); setScroll_star_2(false); setScroll_star_3(false); setScroll_star_4(false); setScroll_star_5(false);}
    }
    useEffect(() => {window.addEventListener("scroll", starScroll)}, [])
    // scroll effect \\
    const [AboutScroll, setAboutScroll] = useState(false);
    const About_scroll = () => {
        let heightToHidden_1 = 30;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        if (winScroll > heightToHidden_1) {setAboutScroll(true)}
        else { setAboutScroll(false)}
    }
    useEffect(() => {window.addEventListener("scroll", About_scroll)}, [])
    // scroll effect \\
    const [ResumeScroll, setResumeScroll] = useState(false);
    const Resume_scroll = () => {
        let heightToHidden_1 = 1000;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        if (winScroll > heightToHidden_1) {
            setResumeScroll(true)
        }
        else{
            setResumeScroll(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", Resume_scroll)
    }, [])
    // scroll effect \\
    const [PortfolioScroll, setPortfolioScroll] = useState(false);
    const Portfolio_scroll = () => {
        let heightToHidden_1 = 2200;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        if (winScroll > heightToHidden_1) {
            setPortfolioScroll(true)
        }
        else{
            setPortfolioScroll(false)
        }
    }
    useEffect(() => {  window.addEventListener("scroll", Portfolio_scroll)  }, [])
    // scroll effect \\
    const [QuestionsScroll, setQuestionsScroll] = useState(false);
    const Question_scroll = () => {
        let heightToHidden_1 = 3200;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        if (winScroll > heightToHidden_1) {
            setQuestionsScroll(true)
        }
        else{
            setQuestionsScroll(false)
        }
    }
    useEffect(() => {  window.addEventListener("scroll", Question_scroll)  }, [])
    // scroll effect \\
    const [CommentScroll, setCommentScroll] = useState(false);
    const Comment_scroll = () => {
        let heightToHidden_1 = 4200;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        if (winScroll > heightToHidden_1) {
            setCommentScroll(true)
        }
        else{
            setCommentScroll(false)
        }
    }
    useEffect(() => {  window.addEventListener("scroll", Comment_scroll)  }, [])
    // scroll effect \\
    const [ContactScroll, setContactScroll] = useState(false);
    const Contact_scroll = () => {
        let heightToHidden_1 = 4900;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        if (winScroll > heightToHidden_1) {
            setContactScroll(true)
        }
        else{
            setContactScroll(false)
        }
    }
    useEffect(() => {  window.addEventListener("scroll", Contact_scroll)  }, [])
    
    // copy text form \\
    const onCopyText = () => {
        setCopyMessage(true)
        console.log(CopyMessage);
        document.getElementById("copy_text_id").style.color = "#666"
        setDisable(true)
        setTimeout(() => {document.getElementById("copy_text_id").style.color = "#fff"}, 2500);
        setTimeout(() => {setCopyMessage(false)}, 2500);
        setTimeout(() => {setDisable(false)}, 2500);
    }

    return (
        <Context.Provider
            value={{
                // function \\
                Tabs_1, Tabs_2, Tabs_3, Tabs_4, onCopyText, OnActiveInfo, onChangeMessage, 
                OnReset, onChangeEmail, onChangeNumber, onChangeName, sendEmail,
                // classes \\ 
                open_1, open_2, open_3, open_4, Scrolls_1, Scrolls_2, Scrolls_3, CopyMessage, 
                Disable, scroll_star_1, scroll_star_2, scroll_star_3, scroll_star_4, scroll_star_5, 
                form, userName, userPhone, userEmail, userMessage, Alert_plus, SentAlert, InfoAlert,
                AboutScroll, ResumeScroll, PortfolioScroll, QuestionsScroll, CommentScroll, ContactScroll,
                
            }}
        >
            {children}
        </Context.Provider>
    );
};
export default Context;
