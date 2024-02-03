import React from 'react'
import { animateScroll as scroll } from 'react-scroll';

function ScrollToTopButton() {

    
    const scrollToTop = () => {
        scroll.scrollToTop({
          duration: 500, // adjust the duration as needed
          smooth: 'easeInOutQuart', // adjust the easing function as needed
        });
      };

      const styles = {
        button: {
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px',
          borderRadius: '5px',
          cursor: 'pointer',
          backgroundColor: '#FFA400',
          color: '#fff',
          border: 'none',
          outline: 'none',
          width: "50px",
          height: "50px",
          borderRadius: "50%",

        },
      };
      

  return (
    <button onClick={scrollToTop} style={styles.button}>
      <i class="fa fa-arrow-up"></i>
    </button>
  )
}

export default ScrollToTopButton