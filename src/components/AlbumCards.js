


function AlbumCards ({name, image, genre, youtube, liked, bio}) {
    return (
        <div className= 'albumCard'>
            <h3>{name}</h3>
            <img src={image} alt={name}/>
            <p><button>Show More</button></p>
        </div>
        
    );
}

export default AlbumCards;