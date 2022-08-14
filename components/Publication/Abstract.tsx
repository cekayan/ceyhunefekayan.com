interface abstractInfo {
  abstract: string;
}

const Abstract = ({ abstract }: abstractInfo) => {
  return (
    <section>
      <h3>Abstract</h3>
      <p>{abstract}</p>
    </section>
  );
};

export default Abstract;
