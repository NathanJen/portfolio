import React from 'react'

const styles = {
  // heroImg: {
  //   width: '100%',
  // },
  img: {
    width: '100%',
  },
  name: {
    marginTop: '70px',
    fontSize: '48px',
    fontWeight: 'bold',
    textAlign: 'center',
    wordSpacing: '10px'
  },
  row: {
    marginTop: '70px',
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  informationContainer: {
    textAlign: 'center'
  },
  informationTitle: {
    fontSize: '24px',
    fontWeight: 'bold'
  }
}

export default function ProjectIntro ({ image, name, timeline, role, team }) {
  return (
    <React.Fragment>
      {/* <div style={styles.heroImg}> */}
        <img style={styles.img} src={image} alt="Project hero" />
      {/* </div> */}
      <h1 style={styles.name}>{name}</h1>
      <div style={styles.row}>
        <div style={styles.informationContainer}>
          <p style={styles.informationTitle}>Timeline:</p>
          <p>{timeline}</p>
        </div>
        <div style={styles.informationContainer}>
          <p style={styles.informationTitle}>Role:</p>
          <p>{role}</p>
        </div>
        <div style={styles.informationContainer}>
          <p style={styles.informationTitle}>Team:</p>
          <p>{team}</p>
        </div>
      </div>
    </React.Fragment>
  )
}