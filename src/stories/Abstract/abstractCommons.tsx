import abstractImage from '../assets/abstract_image.jpeg';

export const overline = 'Per i cittadini';
export const title = 'Lorem ipsum dolor sit amet, consectetur';
export const description =
  'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const descriptionComponent = (
  <>
    Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. <b>Excepteur sint</b> obcaecat cupiditat non proident, sunt
    in culpa qui officia <a>deserunt mollit anim</a> id est laborum.
  </>
);

export const imageComponent = (
  <div style={{ display: 'flex', width: '100%' }}>
    <div
      style={{
        position: 'absolute',
        zIndex: -1,
        height: '600px',
        width: '100%',
      }}
    >
      <img
        aria-roledescription="Background Image"
        alt="sunset"
        src={abstractImage}
        style={{
          zIndex: -2,
          opacity: 0.3,
        }}
      />
    </div>
    <label>Custom Label</label>
  </div>
);

export const imageComponentDark = (
  <div style={{ display: 'flex', width: '100%' }}>
    <div
      style={{
        position: 'absolute',
        zIndex: -1,
        height: '600px',
        width: '100%',
        backgroundColor: 'darkblue',
        opacity: 0.5,
      }}
    >
      <img
        aria-roledescription="Background Image"
        alt="sunset"
        src={abstractImage}
        style={{
          zIndex: -2,
          opacity: 0.3,
        }}
      />
    </div>
    <label>Custom Label</label>
  </div>
);

export const defaultValues = {
  overline,
  title,
  description,
  layout: 'left',
};
