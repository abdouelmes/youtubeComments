
const Input = () => {
    const showVideo = () => {
        var videoUrl = document.getElementById("videoUrl").value
        var videoBlock = document.getElementById("myFrame");
        videoBlock.src = 'https://www.youtube.com/embed/' + getId(videoUrl);
        if (videoBlock.style.display === "none") {
            videoBlock.style.display = "block";
        }
    }
    const getId = (url) => {
        /* eslint-disable */
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length === 11) {
        return match[2];
    } else {
        return 'error';
    }
}
    return (
    <div className="input">
    <label className="link">
    <p>Youtube Video link:</p>
    <br/>
        <input type="text" id="videoUrl"  name="name" placeholder="Please enter a youtube link... " />
    </label>
            <input type="submit" onClick={showVideo} value="Check Comments" />
            <iframe className='videoBlock' style={{display:'none'}} id="myFrame" title="videoPreview" width="950" height="400">
           </iframe>
    </div>
  )
}

export default Input