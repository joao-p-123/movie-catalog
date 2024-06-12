document.addEventListener('DOMContentLoaded', () => {
    fetchMovies();
  });
  
  async function fetchMovies() {
    const response = await fetch('http://localhost:3000/movies', {
      headers: {
        'Authorization': `Bearer YOUR_JWT_TOKEN`
      }
    });
  
    if (!response.ok) {
      console.error('Failed to fetch movies');
      return;
    }
  
    const movies = await response.json();
    const moviesContainer = document.getElementById('movies-container');
    
    movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
  
      const movieImage = document.createElement('img');
      movieImage.src = movie.imageUrl || 'default-image.jpg'; // Coloque uma imagem padrão
      movieImage.alt = movie.title;
  
      const movieDetails = document.createElement('div');
      movieDetails.classList.add('movie-details');
  
      const movieTitle = document.createElement('h2');
      movieTitle.textContent = movie.title;
  
      const movieDescription = document.createElement('p');
      movieDescription.textContent = movie.description;
  
      const movieDirector = document.createElement('p');
      movieDirector.textContent = `Director: ${movie.director}`;
  
      const movieReleaseDate = document.createElement('p');
      movieReleaseDate.textContent = `Release Date: ${new Date(movie.releaseDate).toLocaleDateString()}`;
  
      movieDetails.appendChild(movieTitle);
      movieDetails.appendChild(movieDescription);
      movieDetails.appendChild(movieDirector);
      movieDetails.appendChild(movieReleaseDate);
  
      movieCard.appendChild(movieImage);
      movieCard.appendChild(movieDetails);
  
      moviesContainer.appendChild(movieCard);
    });
  }
  