---
title: "Intel High Performance Data Analytics"
excerpt: |
  <div style="display: flex; align-items: center; justify-content: space-between;">
    <img src="/images/intel1.png" alt="Intel High Performance Data Analytics Image" style="width: 100px; height: 75px; margin-right: 20px; flex-shrink: 0;">
    <div style="flex: 1;">
      Innovative convergence solutions in high performance data analytics and simulation software development using Intel architecture.
    </div>
  </div>
collection: portfolio
order: 8
---


<img src='/images/code.png' width='100' height='75'>

[GitHub](https://github.com/DSC-SPIDAL/harp/tree/subgraph2vec)

## SubGraph2Vec Vectorized Tree-like Subgraph Counting
<img src='/images/netg.png' width='400' height='200'>
### Challenges in Subgraph Counting
- Extreme computational complexity (O(n^k) for k-size subgraphs)
- Inefficient memory access patterns
- Poor SIMD vectorization support
- Exponential complexity with subgraph size

### Solution: SubGraph2Vec Approach
- **Algorithm Design**
  - Converts color-coding to matrix operations
  - Minimizes neighbor traversal
  - Leverages linear algebra kernels

- **System Optimization**
  - Custom data structures
  - Optimized thread execution model
  - Enhanced hardware efficiency for VPU
  - Improved memory bandwidth usage

### Key Features
- Highly-vectorized implementation
- Distributed system support
- Cross-platform compatibility
  - CPU support
  - GPU support
  - NEC Vector Engine support

### Performance Achievements
- Up to 660x improvement over state-of-the-art
- Scales to template size of 20
- Strong distributed scalability
- Efficient hardware utilization

## Publications

L.  Chen,  J.  Li,  C.  Sahinalp,  M.  Marathe,  A.  Vullikanti,  A.  Nikolaev, E.  Smirnov,  R.  Israfilov,  and  J.  Qiu,  “Subgraph2vec:   Highly-vectorized tree-like  subgraph  counting,”  in 2019 IEEE International Conference on Big Data, IEEE, 2019.

 

L. Chen, J.  Li , A. Azad, L. Jiang, A.  Vullikanti,  A.  Nikolaev, E.  Smirnov,  R.  Israfilov,  and  J.  Qiu,  "A GraphBLAS Approach for Subgraph Counting," arXiv preprint arXiv:1903.04395.


