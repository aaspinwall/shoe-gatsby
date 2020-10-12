import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .settings {
    position: fixed;
    top: 0;
    right: 0;
    padding: 1rem;
    border: 1px solid black;
    #indicator {
      font-weight: bold;
      font-size: 1.5rem;
    }
    > * {
      margin: 0.15rem;
    }
  }
`;

export const Ruler = () => {
  const [vwidth, setVwidth] = React.useState(10);
  const [vheight, setHeight] = React.useState(10);
  return (
    <Wrapper>
      <h3>
        {vwidth}vw / {vheight}vh
      </h3>

      <div>Height</div>
      <input
        onChange={(e) => setHeight(e.target.value)}
        type='number'
        value={vheight}
      />

      <div>Width</div>
      <input
        onChange={(e) => setVwidth(e.target.value)}
        type='number'
        value={vwidth}
      />
      <div
        className='box'
        style={{ width: `${vwidth}vw`, height: `${vheight}vw` }}
      ></div>
    </Wrapper>
  );
};

export const Font = () => {
  const [min, setMin] = React.useState(1);
  const [rel, setRel] = React.useState(5);
  const [max, setMax] = React.useState(5);

  const fluidFont = `clamp(${min + "rem"}, ${rel + "vw"}, ${max + "rem"})`;

  const responsive = (mult) => {
    return `clamp(${min * mult + "rem"}, ${rel * mult + "vw"}, ${
      max * mult + "rem"
    })`;
  };

  const resmarg = (mult) => {
    return `${mult * rel}vh`;
  };

  return (
    <Wrapper>
      <h1>Regular fonts</h1>
      <h1>H1</h1>
      <h2>H2</h2>
      <h3>H3</h3>
      <h4>H4</h4>
      <h5>H5</h5>
      <h6>H6</h6>

      {/* <h1 style={{ fontSize: responsive(1) }}>H1</h1>
      <h2 style={{ fontSize: responsive(0.9) }}>H2</h2>
      <h3 style={{ fontSize: responsive(0.8) }}>H3</h3>
      <h4 style={{ fontSize: responsive(0.7) }}>H4</h4>
      <h5 style={{ fontSize: responsive(0.6) }}>H5</h5>
      <h6 style={{ fontSize: responsive(0.5) }}>H6</h6> */}

      <h1>Responsive fonts</h1>
      <div>
        <h1 style={{ fontSize: responsive(1) }}>The quick</h1>
        <h2 style={{ fontSize: responsive(0.9) }}>Brown fox</h2>
        <h3 style={{ fontSize: responsive(0.8) }}>Jumps </h3>
        <h4 style={{ fontSize: responsive(0.7) }}>Over </h4>
        <h5 style={{ fontSize: responsive(0.6) }}>The lazy</h5>
        <h6 style={{ fontSize: responsive(0.5) }}>Dog</h6>
      </div>
      <div className='settings'>
        <div id='indicator'>{`clamp(${min * 16 + "px"}, ${rel + "vw"}, ${
          max * 16 + "px"
        })`}</div>
        <span
          style={{
            background: "green",
            width: rel + "vw",
            height: "10px",
            display: "block",
            content: " ",
          }}
        ></span>
        <div>Min (rem)</div>
        <input
          onChange={(e) => setMin(e.target.value)}
          type='number'
          value={min}
        />

        <div>Relative (vw)</div>
        <input
          onChange={(e) => setRel(e.target.value)}
          type='number'
          value={rel}
        />

        <div>Max (rem)</div>
        <input
          onChange={(e) => setMax(e.target.value)}
          type='number'
          value={max}
        />

        <div
          style={{
            fontSize: fluidFont,
          }}
        ></div>
      </div>
    </Wrapper>
  );
};
