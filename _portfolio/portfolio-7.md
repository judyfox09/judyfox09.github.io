---
title: "SGX-based Big-Data Analytics Frameworks"
excerpt: Scalable big-data analytics frameworks over the SGX TEE to support iterative, MPI-based cluster computing
teaser_image: "/images/SGX.png"
collection: portfolio
order: 7
---


<img src='/images/SGX.png' width='300' height='200'>

[GitHub](https://github.com/Data-ScienceHub/HySec-Flow)

## Introduction
- Set of security-focused CPU instructions
- Protects application code and data
- Uses enclaves for secure memory execution
- Prevents disclosure/modification of sensitive data

## PROBIDA Framework
### Core Design
- Built on Harp-DAAL
- Supports iterative, MPI-based cluster computing
- Hybrid model: selective enclave usage
- Keeps management components outside, workers inside enclaves

### Key Features
- Secure enclave creation and management
- Cross-enclave attestation
- Secure inter-enclave connections
- Automated deployment optimization
- Task graph translation tools

### Capabilities
- Scalable big-data analytics
- Protected machine learning operations
- Strategic enclave deployment
- Resource-aware optimization

## Publications

**Conferences/Workshops** 

C. Widanage, W. Liu, J. Li, H. Chen, X. Wang, H. Tang, J. Fox, HySec-Flow: Privacy-Preserving Genomic Computing with SGX-based Big-Data Analytics Framework, in the Proceedings of IEEE 14th International Conference on Cloud Computing (CLOUD), September 5-11, 2021. [Link](https://12d5b035-1d29-4346-a54b-4563c7f1da9e.filesusr.com/ugd/078a65_dd262fda0ebf4c6a9976e2f62c9a5056.pdf)

<a href="https://docs.google.com/presentation/d/e/2PACX-1vQIbq-sPt9LgNye1wYNFA4FNg2K7mzLzK3P0Oc_sRt_MHXevQCFisJIEbsk35cSbw/embed?start=true&loop=false&delayms=3000" target="_blank">
  View Google Slides Presentation
</a>