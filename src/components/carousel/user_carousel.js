import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './user_carousel_styles.js';

const UserCarousel = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [allUsersLoaded, setAllUsersLoaded] = useState(false);

  useEffect(() => {
    setAllUsersLoaded(false);
  }, [userData]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=10'); 
        setUserData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? userData.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    if (currentIndex === userData.length - 1) {
      loadMoreUsers();
    } else {
      setCurrentIndex(prevIndex => prevIndex === userData.length - 1 ? 0 : prevIndex + 1);
    }
  };

  const loadMoreUsers = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=5'); 
      setUserData(prevUserData => [...prevUserData, ...response.data.results]);
      setCurrentIndex(prevIndex => prevIndex + 1);
      if (response.data.results.length === 0) {
        setAllUsersLoaded(true); // Establecer como verdadero si no hay más usuarios cargados
      }
    } catch (error) {
      console.error('Error fetching more user data:', error);
    }
  };

  const handleLikeClick = () => {
    const currentUser = userData[currentIndex];
    if (!favorites.includes(currentUser)) {
      setFavorites(prevFavorites => [...prevFavorites, currentUser]);
    } else {
      setFavorites(prevFavorites => prevFavorites.filter(favorite => favorite !== currentUser));
    }
  };

  const isFavorite = favorites.includes(userData[currentIndex]);

  return (
    <div style={styles.container}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        userData.length > 0 && (
          <div style={styles.carousel}>
            
            <div style={styles.userContainer}>
           
              <div style={styles.imageContainer}>
              
                <img src={userData[currentIndex].picture.large} alt="User" style={styles.userImage} />
              </div>
              <FontAwesomeIcon 
                  icon={faHeart} 
                  style={{ ...styles.heartIcon, color: isFavorite ? 'red' : 'gray' }} 
                  onClick={handleLikeClick} 
                />
              <h2 style={styles.userName}>{`${userData[currentIndex].name.title} ${userData[currentIndex].name.first} ${userData[currentIndex].name.last}`}</h2>
            </div>
            {!allUsersLoaded && (
            <div style={styles.buttonContainer}>
              {currentIndex > 0 && (
              <button style={{ ...styles.arrowButton, ...styles.prevButton }} onClick={handlePrevClick}>Anterior</button>)}
              <button style={{ ...styles.arrowButton, ...styles.nextButton }} onClick={handleNextClick}>Siguiente</button>
            </div>
            )}
            {allUsersLoaded && <p>No hay más usuarios para mostrar</p>}
          </div>
        )
      )}
    </div>
  );
};

export default UserCarousel;
