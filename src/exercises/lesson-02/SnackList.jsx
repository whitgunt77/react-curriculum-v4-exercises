export default function SnackList() {
  const snacks = [
    { name: 'Munchos', rank: 4 },
    { name: 'White Reeses', rank: 5 },
    { name: 'Strawberry Cheesecake Ice Cream', rank: 3 },
    { name: 'Cheesecake', rank: 1 },
    { name: 'Fruit Loops with Marshmallows', rank: 2 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <>
      {sortedSnacks.map((snack) => (
        <li
          key={snack.name}
          style={{
            fontSize: '1.4em',
            paddingLeft: '0.5em',
            listStyleType: 'none',
          }}
        >
          <strong>Rank:</strong> #{snack.rank} — <strong>Snack:</strong>{' '}
          {snack.name}
        </li>
      ))}
      <br />
      <hr />
    </>
  );
}
