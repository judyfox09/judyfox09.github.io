---
title: "NEC Vector Engine"
excerpt: Leverage the leading-edge vector technology of SX-Aurora TSUBASA

teaser_image: "/images/NECimg.png"
collection: portfolio
order: 6
---

[Github](https://github.com/dsc-nec/frovedis_matrix)
## Introduction
* NEC Vector Engine Processor:
  * 8 vector cores
  * 64 vector registers per core
  * First to use 6 HBM2 memory modules
  * 1.2 TB/s memory bandwidth

* SpGEMM Implementation:
  * Novel hybrid method with sparse vectors
  * Optimized for vector architectures
  * 139% average improvement over CPU
  * Up to 6.43x performance gain

<img src='/images/vector.png' width='800' height='400'>

**Performance Evaluation**  
* Testing Details:
  * Compared with Intel MKL
  * Evaluated using A^2 calculation
  * Excludes I/O time
  * Shows better scalability with 2 sockets

## Publications
B. Peng, J. Li, S. Akkas, T. Araki, O. Yoshiyuki, J. Qiu, "Rank Position Forecasting in Car Racing",  Proceedings of 35th IEEE International Parallel & Distributed Processing Symposium (IPDPS21)

J. Li, F. Wang, and Q. J. Araki, Takuya, “Generalized sparse matrix-matrix multiplication for vector engines and graph applications,” in
MCHPC’19: Workshop on Memory Centric High Performance Computing, ACM, 2019.

