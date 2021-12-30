function Results({
  loading, data
}) {

  return (
    <section>
      {
        loading
          ?
          <div>LOADING...</div>
          :
          <pre>{data ? JSON.stringify(data, undefined, 2) : null}</pre>
      }
    </section>
  );
}

export default Results;
