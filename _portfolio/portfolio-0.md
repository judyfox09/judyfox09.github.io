---
title: "IndyCar"
excerpt: Real-time anomaly detection from edge to HPC-cloud in collaboration with Indycar and Intel.
collection: portfolio
teaser_image: "/images/indycarimage.png"
order: 0
---


## Objectives

<img src='/images/objectives.png' width='800' height='500'>

## Publications
### Rank Position Forecasting in Car Racing
B. Peng, J. Li, S. Akkas, T. Araki, O. Yoshiyuki, J. Qiu  
Proceedings of 35th IEEE International Parallel & Distributed Processing Symposium (IPDPS21)

### Anomaly Detection Over Streaming Data: Indy500 Case Study
C. Widanage, J. Li, S. Tyagi, R. Teja, B. Peng, S. Kamburugamuve, D. Baum, D. Smith, J. Qiu, and J. Koskey  
2019 IEEE 12th International Conference on Cloud Computing (CLOUD), pp. 9–16, IEEE, 2019.

### A fast video image detection using tensorflow mobile networks for racing cars
S. Akkas and S. S. Maini and J. Qiu  
Stream Systems and Real-time Machine Learning (STREAM-ML) Workshop of IEEE Big Data Conference, IEEE, 2019.

# Introduction
**Equipment Malfunction Prediction and Alerts**  
Anomaly prediction can help engineers identify issues in the hardware before they become serious. Especially at the speed at which these cars travel, small issue can quickly snowball to become catastrophic.

**Recommendations with Evolving Driving Conditions**  
Track conditions are ever evolving, from humidity, ambient temperature and track temperature. All of these factors affect the way on-board systems perform in different ways. It can be hard for a human to take appropriate action at the appropriate time with such gradual change.

**Performance Tuning During Practice**  
Performance of hardware can be tuned to minute degrees based on insights provided by AI systems which can go beyond the level of pattern recognition capable by humans.



# Anomaly Detection
Real-time anomaly detection from edge to HPC-cloud in collaboration with Indycar and Intel.
[Github](https://github.com/DSC-SPIDAL/IndyCar)
- **Applications**:
  - Video streams and sensor telemetry data assist in:
    - Increasing race safety.
    - Optimizing strategies for teams and drivers.
    - Improving analysis and predictions.
- **Task Priority**: Anomaly detection begins with object detection in video analytics.
- **Approach**:
  - Created new datasets tailored to IndyCar race cars.
  - Compared three Single Shot Multibox Detector (SSD) models from TensorFlow Detection Model Zoo.
  - Ran experiments on CPU, GPU, and Edge TPU (Google Coral Dev Board).
- **Findings**:
  - Edge TPU achieved the best inference time.
  - Best suited for real-time machine learning tasks due to reduced latency and efficient edge computing.

**Prototype**
<img src='/images/raceimage1.gif' width='800' height='500'>

<img src='/images/raceimage2.gif' width='800' height='500'>

<img src='/images/raceimage3.gif' width='800' height='500'>

# Rank Forecasting
Rank position forecasting in car racing is a challenging problem. We propose RankNet, a combination of the encoder-decoder network and a separate Multilayer Perception network that is capable of delivering probabilistic forecasting to model the pit stop events and rank position in car racing. RankNet demonstrates a significant performance improvement.

**Publication**  
Rank Position Forecasting in Car Racing
B. Peng, J. Li, S. Akkas, T. Araki, O. Yoshiyuki, J. Qiu
Proceedings of 35th IEEE International Parallel & Distributed Processing Symposium (IPDPS21) [Link](https://arxiv.org/pdf/2010.01707.pdf)

[Github](https://github.com/DSC-SPIDAL/rankpredictor)


**RankNet Architecture**  
The details of RankNet is shown in our neural network architecture for the two sub-models in Figure.

<img src='/images/ranknetarch.png' width='800' height='500'>

**PitModel**:
- Utilizes simple multilayer perceptron network
- Implemented through Stacked Dense layers

**RankModel**:  
- Based on encoder-decoder architecture
- Designed for sequence modeling
- **Features**:
  - Deep neural network for long-range context dependencies
  - Uses LSTM cells or Transformer
  - Dense layer converts output to distribution parameters


## RankNet Forecasting Results

### Performance Improvements:
- 19% MAE improvement in two laps forecasting
- 7% MAE improvement in stint forecasting  
- Greater stability with new, unseen data

### Key Advantages:
- Successful incorporation of domain knowledge
- Reduced need for feature engineering
- Probabilistic forecasting capabilities 
- Enhanced racing strategy optimization potential
- Superior accuracy compared to baseline models

### Features and Benefits:
- Combines deep learning with domain expertise
- Provides comprehensive race position predictions
- Enables refined racing strategy development
- Demonstrates robust performance across different scenarios


# Video Image Detection
### A Fast Video Image Detection using TensorFlow Mobile Networks for Racing Cars

- **Objective**: Enhance real-time edge video analysis for IndyCar racing.  
- Existing object detection models fail to detect IndyCar race cars accurately.  
- Created a custom dataset and tested three TensorFlow SSD models on CPU, GPU, and Edge TPU.  
- **Edge TPU (Google Coral Dev Board)**:  
  - Achieved the best inference time.  
  - Ideal for real-time machine learning tasks, reducing data transfer latency.  
- **Applications**:  
  - Improve race safety, predictive analysis, and optimized strategies.  
  - Combine video and telemetry data for better insights.


<a href="https://docs.google.com/presentation/d/e/2PACX-1vQGlWVjCg9CBNjiCDzCNMNaPxaUg3sAgFpii81iyXDDxr4A5xR4q4Y-bN7uV_zzPw/embed?start=false&loop=false&delayms=3000" target="_blank">
  Presentation
</a>