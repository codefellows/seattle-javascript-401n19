function Results(props) {

  return (
    <section>
      {
        props.loading
          ?
          <div>LOADING...</div>
          :
          <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      }
    </section>
  );
}

export default Results;
