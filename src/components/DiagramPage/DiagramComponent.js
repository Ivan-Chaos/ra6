import Plot from 'react-plotly.js';

const DiagramComponent = ({ diagramData }) => {
    return (<div>
        <Plot
            data = {[
                {
                  type: "scatterpolar",
                  mode: "lines+markers",
                  r: [ ...diagramData.distance, diagramData.distance[0]],
                  theta: [...diagramData.angles, 360],
                  fill: "toself",
                  fillcolor: 'rgba(137, 78, 250, 0.23)',
                  line: {
                    color: 'black'
                  }
                },
              ]}
              layout = {{
                autosize: false,
                height: 650,
                polar: {
                  radialaxis: {
                    visible: true,
                    range: [0, Math.max(...diagramData.distance)+Math.max(...diagramData.distance)*0.1]
                  }
                },
                hovermode: false,
                showlegend: false
              }}
              config = {{
                displayModeBar: false, // this is the line that hides the bar.
              }}
        />
    </div>);
}

export default DiagramComponent;