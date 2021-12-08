import styled from 'styled-components'
import images  from '../../../data/images'
const HomeContainer = styled.div`
    width:100%;
    min-height:100vh;
    opacity:1;
  padding-top:80px;
`;
const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        justifyContent: 'center',
    }
}

function Card(props) {
    return (
        <div style={{
            backgroundImage: `url(${props.url})`,
            ...styles2.card,
            ...styles2[props.size]
        }}>
        </div>
    )
}

const styles2 = {
    card: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
        border:'1px solid gray'
    },
    small: {
        gridRowEnd: 'span 26'
    },
    medium: {
        gridRowEnd: 'span 33'
    },
    large: {
        gridRowEnd: 'span 45'
    }
}

const BackgroundFull = styled.div`
    position:fixed;
    display:none;
    width:100%;
    background-color: rgba(0,0,0,0.5);
    height:100vh;
    z-index:8;
`;
export default function Home() {
    return (
        <HomeContainer >
          <BackgroundFull id="home-page"></BackgroundFull >      
          <div style={styles.pin_container}>
              { images.map(el => {
                  return <Card url={el.url} size={el.size} />
              })}
               { images.map(el => {
                  return <Card url={el.url} size={el.size} />
              })}
         
        </div>
        </HomeContainer>
    )
}
