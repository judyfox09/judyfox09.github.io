---
title: "Covid Prediction"
excerpt: |
  <div style="display: flex; align-items: center; justify-content: space-between;">
    <img src="/images/covid.png" alt="COVID-19 Chart" style="width: 100px; height: 75px; margin-right: 20px; flex-shrink: 0;">
    <div style="flex: 1;">
      Interpreting County Level COVID-19 Infection and Feature Sensitivity using DL Time Series Models
    </div>
  </div>
collection: portfolio
order: 0
---


<img src='/images/covid.png' width='100' height='75'>

Funded by NSF Expedition grant

[Github](https://github.com/Data-ScienceHub/gpce-covid)

## Introduction
* Framework:
  * Combines sensitivity analysis with Google’s Temporal Fusion Transformer (TFT).
  * Explains spatio-temporal features and model-learned patterns.

* Methodology:
  * Uses Morris Method to assess feature sensitivity.
  * Correlates Morris index with attention patterns for interpretation.

* Key Contributions:
  * Predicts COVID-19 cases at a county level with dynamic, detailed data.
  * Modified TFT outperforms the baseline Pytorch model.

* Dataset:
  * Covers 3142 US counties.
  * Static features: age, health disparity, industry.
  * Dynamic features: vaccination, spread, transmissible cases, social distancing.

* Results:
  * Accurately models complex interactions.
  * Provides interpretable insights for mitigation and response planning.

## Publications

Interpreting County-Level COVID-19 Infections using Transformer and Deep Learning Time Series Models 
Khairul Islam, Di Zhu, Yingzheng Liu, Andrej Erkelens, Nick Daniello, Aparna Marathe, Judy Fox 
Proceedings of the IEEE Conference on Digital Health (ICDH 2023), July 2-8, 2023, Chicago.

## References

Secondary industry segments
Us Census Bureau, North American Industry Classification System(naics) 2017 Paperbound, ser. North American IndustryClassification System. Claitor’s Publishing Division, 2017. 