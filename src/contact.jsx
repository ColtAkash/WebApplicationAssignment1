/*Akash Sukumaran
301359421 
28-09-2024*/
import '../src/contact.css';

export default function Contact() {
    return (
        <>
            <p style={{ color: '#ff7b54', fontSize: '2rem', fontWeight: 'bold' }}>Contact</p>
            <form id="ffp">
                <label htmlFor="myFName"> *First Name: </label>
                <input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />

                <label htmlFor="myLName"> *Last Name: </label>
                <input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />

                <label htmlFor="myEmail"> *Email: </label>
                <input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />

                <input type="submit" className="submit" value="Submit" /> <br />
            </form> <br />
            <p style={{ color: '#ff7b54', fontWeight: 'bold' }}>AKASH SUKUMARAN</p>
            <p style={{ color: '#ff7b54' }}><i>Call me on: <strong>437-5570225</strong></i></p>
            <p style={{ color: '#ff7b54' }}>https://www.linkedin.com/in/akashee/</p>
            <p style={{ color: '#ff7b54' }}>Email: akashkannan71@gmail.com</p>
        </>
    );
}
