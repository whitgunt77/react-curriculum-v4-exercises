//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Whitney';
  const age = 26;
  const hobbies = [
    'drawing',
    'baking',
    'hiking',
    'fun adventures',
    'chess',
    '+ more!',
  ];

  return (
    <div>
      {/* add JSX here */}
      {/* Heading */}
      <h1>Hi 👋🏻, I&apos;m {name}!</h1>
      <p>
        {/* Age */}
        <strong>Age:</strong> {age}
      </p>
      {/* About Me Paragraph */}
      <p>
        <strong>About Me:</strong>
        <br />I am a Junior Web Developer based in High Point, North Carolina,
        passionate about building interactive user experiences and continuously
        learning new programming practices.
      </p>

      {/* Hobbies */}
      <h2>My Hobbies & Interests Include:</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
