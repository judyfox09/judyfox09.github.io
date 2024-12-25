---
title: "MapReduceRoles for Azure"
excerpt: "Distributed decentralized MapReduce runtime for Windows Azure<br/><img src='/JudyFox/images/code.png' width='100' height='75'>"
collection: portfolio
order: 9
---

<img src='/JudyFox/images/code.png' width='100' height='75'>

MapReduceRoles4Azure is a distributed decentralized MapReduce runtime for Windows Azure that was developed using Azure cloud infrastructure services.

[Website](http://salsahpc.indiana.edu/mapreduceroles4azure/)

## Introduction
### Core Architecture
- Distributed decentralized MapReduce runtime for Azure
- Built on Azure cloud infrastructure services
- Decentralized control model (no master node)
- Dynamic scaling capabilities

### Azure Service Integration
- **Azure Queues**: Map/reduce task scheduling
- **Azure Tables**: Metadata and monitoring
- **Azure Blob**: Storage (input/output/intermediate)
- **Azure Compute**: Worker role execution

### Key Benefits
- High scalability
- Enhanced availability
- Distributed processing
- No single point of failure
- Reduced bandwidth bottlenecks
- Minimal management overhead

### Challenge Management
- Handles higher cloud latencies via coarse-grained tasks
- Addresses availability issues through:
  - Retry mechanisms
  - Non-reliance on immediate data access
- Supports dynamic instance scaling during computation

<img src='/JudyFox/images/blob.png' width='600' height='300'>

## Downloads
MapReduceRoles4Azure binary beta version together with few samples is available for download and usage. We are actively working on open sourcing the MapReduceRoles4Azure.

 
1. Visual Studio 2010 is required

2. Install Azure SDK [Link](http://msdn.microsoft.com/en-us/windowsazure/cc974146.aspx)

3. Download MapReduceRoles4Azure library

## Publications

Thilina Gunarathne, Tak-Lon Wu, Judy Qiu, Geoffrey Fox. MapReduce in the Clouds for Science, Proceedings of CloudCom 2010 Conference, IUPUI Conference Center, Indianapolis. November 30-December 3 2010 

 

Thilina Gunarathne (2010), "Azure MapReduce," https://hub.vscse.org/resources/159.
