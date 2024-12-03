function AddNav(){
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="Home/">MyMusicGallary</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        
    

        <a class="nav-link" href="/home">Home</a>
        <a class="nav-link" href="/about">About</a>
        <a class="nav-link" href="/addmusic">AddMusic</a>
        <a class="nav-link" href="/music-list">MusicList</a>
        <a class="nav-link" href="/update-music">UpdateMusic</a>

     </div>
    </div>
  </div>
</nav>

</>



)

}
export default AddNav;