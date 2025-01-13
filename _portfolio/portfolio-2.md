---
title: "Twister"
excerpt: Iterative Map-Reduce for parallel and scientific computing.
teaser_image: "/images/Twister.png"
collection: portfolio
order: 2
---

<img src='/images/twisterimage1.png' width='100' height='75'>

Build a community to bridge the gap between high performance computing and data analytics.
[Website](https://twister2.org/)
## Introduction
- **Simplifications of MapReduce**:
  - Simplifies implementations of data parallel applications.
  - Widely adopted for its simplicity and service quality.
  - Extensions and enhancements expand applicability to more applications.

- **Features of Twister**:
  - Distinction between static and variable data.
  - Configurable long-running (cacheable) map/reduce tasks.
  - Communication and data transfer via pub/sub messaging.
  - Efficient support for **Iterative MapReduce computations** (much faster than Hadoop or Dryad/DryadLINQ).
  - Combine phase to aggregate reduce outputs.
  - Data access through local disks.
  - Lightweight design (~5600 lines of Java code).
  - Supports typical MapReduce computations.
  - Includes tools for managing data.

- **Development Context**:
  - Developed as part of Jaliya Ekanayake's Ph.D. research.
  - Supported by the SALSA Team at Indiana University (IU).

## Papers and Presentation
Jaliya Ekanayake, Hui Li, Bingjing Zhang, Thilina Gunarathne, Seung-Hee Bae, Judy Qiu, Geoffrey Fox, Twister: A Runtime for Iterative MapReduce," The First International Workshop on MapReduce and its Applications (MAPREDUCE'10) - HPDC2010

 

Jaliya Ekanayake, (Advisor: Geoffrey Fox) Architecture and Performance of Runtime Environments for Data Intensive Scalable Computing, Doctoral Showcase, SuperComputing2009. (Presentation)

 

Jaliya Ekanayake, Atilla Soner Balkir, Thilina Gunarathne, Geoffrey Fox, Christophe Poulain, Nelson Araujo, Roger Barga, DryadLINQ for Scientific Analyses, Fifth IEEE International Conference on e-Science (eScience2009), Oxford, UK.

 

Jaliya Ekanayake, Geoffrey Fox, High Performance Parallel Computing with Clouds and Cloud Technologies, First International Conference on Cloud Computing (CloudComp09) Munich, Germany, 2009.

 

Geoffrey Fox, Seung-Hee Bae, Jaliya Ekanayake, Xiaohong Qiu, and Huapeng Yuan, Parallel Data Mining from Multicore to Cloudy Grids, High Performance Computing and Grids workshop, 2008.

 

Jaliya Ekanayake, Shrideep Pallickara, and Geoffrey Fox MapReduce for Data Intensive Scientific Analysis, Fourth IEEE International Conference on eScience, 2008, pp.277-284.