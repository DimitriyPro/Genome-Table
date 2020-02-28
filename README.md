# Technical Test

The Open Targets Platform aggregates and integrates data from more than 20 different data sources to create evidence that builds and scores associations between diseases and drug targets (human genes).

Our association score ranges from 0 to 1 and is a harmonic sum of individual scores of 7 different data types: `literature`, `rna_expression`, `genetic_association`, `somatic_mutation`, `known_drug`, `animal_model`, and `affected_pathway`.

A score of 0 corresponds to no evidence supporting an association. The closer the score is to 1, the stronger the association. If you would like to know more about our association score, please visit [our scoring documentation page](https://docs.targetvalidation.org/getting-started/scoring).

We would like you to create a data table and visualisation showing the association scores for lung carcinoma and 5 drug targets.

Please call our demo API - https://demo6922545.mockable.io/ - and using the response data, please complete the following steps based on our design specs found below.

1. Create a data table with the following column headings:

   - Symbol
   - Gene ID
   - Gene Name
   - Overall Association Score
   
![Open Targets Front End Technical Test Specification - step 1](https://user-images.githubusercontent.com/7490258/74653221-a211e680-517f-11ea-8a55-38564b659a03.png)

2. When a user clicks the "+", expand the row of the table and show either a bar chart or a radar chart with the association scores for each individual data type - `literature`, `rna_expression`, `genetic_association`, `somatic_mutation`, `known_drug`, `animal_model`, and `affected_pathway`.

![Open Targets Front End Technical Test Specification - step 2](https://user-images.githubusercontent.com/7490258/74653247-b3f38980-517f-11ea-9e01-78494f2e49cb.png)

Please note the following requirements:

- The data table should only have 5 rows
- The data table should show the targets with the top overall association scores
- By default, the data table should be sorted by the overall association score in decreasing order - the target with the highest overall score should be on top followed by the target with the next highest score and so on
- For the bar chart or radar chart, please feel free to use any chart or data visualisation library that you are comfortable using, includinges:
  - D3
  - Chart.js
  - HighCharts
  - CanvasJS
  - Google Charts
  - Recharts
  - … or any other library that you are familiar with using

To make the setup of the project easy, we have bootstrapped it with [Create React App](https://github.com/facebook/create-react-app). Feel free to add any dependencies that you wish by adding them to `package.json` or including them as a script tag in `public/index.html`.


## Solution
This repository contains solution for EBI technical test.
