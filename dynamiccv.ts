
 const form=document.getElementById('resumeform') as HTMLFormElement
const resumedisplayElement = document.getElementById('resume-display') as HTMLDivElement

//hundle form submission
form.addEventListener('submit',(event: Event)=>{
    event.preventDefault()//prevent page reload
    //collect input values
    const firstname=(document.getElementById('firstname') as HTMLInputElement).value
    const lastname=(document.getElementById('lastname') as HTMLInputElement).value
    const email=(document.getElementById('email') as HTMLInputElement).value
    const address=(document.getElementById('address') as HTMLInputElement).value
    const number=(document.getElementById('number') as HTMLInputElement).value
    const education=(document.getElementById('education') as HTMLInputElement).value
    const skills=(document.getElementById('skills') as HTMLInputElement).value
    const experience=(document.getElementById('experience') as HTMLInputElement).value
    //
    
    const resumeHTML= `
        <h2>Dynamic Resume</h2>
        <h3>Personal information</h3>
        <p><b>First Name:</b>${firstname}</P>
        <p><b>Last Name:</b>${lastname}</p>
        <p><b>Email:</b>${email}</p>
        <p><b>Address:</b>${address}</p>
        <p><b>Number:</b>${number}</p>
        <h3>Education</h3>
        <p><b>Education:</b>${education}</p>
        <h3>Skills</h3>
        <p><b>Skills:</b>${skills}</p>
        <h3>Experience</h3>
        <p><b>Experience:</b>${experience}</p>
        `
        //
    if(resumedisplayElement){
        resumedisplayElement.innerHTML = resumeHTML
    }else{
        console.error('The resume display element are missing')
    }

})





    

    

        



