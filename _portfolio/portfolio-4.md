---
title: "IndexedHBase"
excerpt: |
  <div style="display: flex; align-items: center; justify-content: space-between;">
    <img src="/images/indexbase.png" alt="IndexedHBase Image" style="width: 100px; height: 75px; margin-right: 20px; flex-shrink: 0;">
    <div style="flex: 1;">
      Customizable indexing framework to support fast queries and analysis of interesting data subsets
    </div>
  </div>
collection: portfolio
order: 4
---


<img src='/images/indexbase.png' width='100' height='275'>

Customizable indexing framework to support fast queries and analysis of interesting data subsets
IndexedHBase can achieve a query evaluation speed that is siginifcantly faster than using the existing indexing techniques provided by commercial NoSQL databases.

[Website](http://salsaproj.indiana.edu/IndexedHBase/index.html)
## Introduction
### Core Definition
- Advanced storage system extending HBase
- Features customizable indexing framework
- Focuses on efficient subset data analysis
- Built on YARN architecture

### Integration Capabilities
- Compatible with parallel computing platforms:
  - Hadoop MapReduce
  - Twister
- Supports efficient analysis of query results

### Performance Benefits
- Significantly faster query evaluation
  - 10-100 times faster than existing NoSQL solutions
  - Outperforms commercial databases like Riak
- Achieves speed through customized index structures

### Practical Applications
- Successfully implemented in:
  - Text Indexing (ClueWeb09)
  - LCIR Synonym Mining
  - Social Data Analysis (Twitter datasets)

## Publications

**Conferences/Workshops**  

Gao, X., Emilio Ferrara, Judy Qiu. Parallel Clustering of High-Dimensional Social Media Data Streams. In Proceedings of the 15th IEEE/ACM International Symposium on Cluster, Cloud and Grid Computing (CCGrid 2015). Shenzhen, Guangdong, China, May 4-7, 2015.​

 

Gao, X., Qiu. J. 2014. Supporting Queries and Analyses of Large-Scale Social Media Data with Customizable and Scalable Indexing Techniques over NoSQL Databases. In Proceedings of the 14th IEEE/ACM International Symposium on Cluster, Cloud and Grid Computing (CCGrid 2014). Chicago, IL, USA, May 26-29, 2014.

 

Gao, X., Qiu. J. 2013. Social Media Data Analysis with IndexedHBase and Iterative MapReduce. In Proceedings of the 6th Workshop on Many-Task Computing on Clouds, Grids, and Supercomputers (MTAGS 2013) at Super Computing 2013. Denver, CO, USA, November 17th, 2013.

 

Gao, X., Roth, E., McKelvey, K., Davis, C., Younge, A., Ferrara, E., Menczer, F., Qiu, J. 2013. Supporting a Social Media Observatory with Customizable Index Structures - Architecture and Performance. Book chapter to appear in Cloud Computing for Data Intensive Applications, to be published by Springer Publisher, 2014.

 

Gao, X., Nachankar, V., Qiu. J. 2011. Experimenting Lucene Index on HBase in an HPC Environment. In Proceedings of the 1st workshop on High-Performance Computing meets Databases at Supercomputing 2011. Seattle, WA, USA, November 18, 2011.