---
title: "Twister4Azure"
excerpt: Decentralized Iterative MapReduce For Windows Azure Cloud
teaser_image: "/images/azureimage1.png"
collection: portfolio
order: 3
---

<img src='/images/azureimage1.png' width='100' height='75'>

Twister4Azure is a distributed decentralized iterative MapReduce runtime for Windows Azure Cloud.

[Website](http://salsahpc.indiana.edu/twister4azure/)

## Introduction
### Core Characteristics
- Distributed decentralized iterative MapReduce runtime for Windows Azure Cloud
- Extension of MRRoles4Azure
- Optimized for iterative MapReduce applications
- Uses decentralized control model (no master node)

### Key Features
- Supports caching of loop-invarient data
- Introduces new merge step (map->reduce->merge)
- Implements cache-aware task scheduling
- Allows dynamic scaling of computing instances

### Azure Services Integration
- **Azure Queues**: Map and reduce task scheduling
- **Azure Tables**: Metadata & monitoring data storage
- **Azure Blob Storage**: Input, output and intermediate data storage
- **Windows Azure Compute**: Worker roles for computations

### Advantages
- Takes advantage of cloud service provider guarantees:
  - Scalability
  - High availability
  - Distributed nature
- Avoids:
  - Single point of failures
  - Bandwidth bottlenecks
  - Management overheads

### Handling Cloud Challenges
- Addresses higher latencies through coarser grained tasks
- Overcomes availability issues through:
  - Retry mechanisms
  - System design not dependent on immediate data availability


<img src='/images/azuremodel.png' width='800' height='700'>

## Publications
**Conferences/Workshops**  
Thilina Gunarathne, Bingjing Zhang, Tak-Lon Wu and Judy Qiu. Scalable Parallel Computing on Clouds Using Twister4Azure Iterative MapReduce, Future Generation Computer Systems(FGCS), Available online 22 June 2012, ISSN 0167-739X, 10.1016/j.future.2012.05.027.(6/2012)

​Gunarathne, T., Wu, T.-L., Choi, J. Y., Bae, S.-H. and Qiu, J. (2011), Cloud computing paradigms for pleasingly parallel biomedical applications. Concurrency and Computation: Practice and Experience. doi: 10.1002/cpe.1780

