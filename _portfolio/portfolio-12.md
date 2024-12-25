---
title: "Million Sequence Clustering"
excerpt: "Find clusters for large sequence sets with around million sequences<br/><img src='/JudyFox/images/seq.png' width='100' height='75'>"
collection: portfolio
order: 12
---

<img src='/JudyFox/images/seq.png' width='100' height='75'>

The goal of million sequence clustering was to find clusters for large sequence sets with around million sequences.

[Website](http://salsahpc.indiana.edu/millionseq/)

## Introduction

The goal of million sequence clustering was to find clusters for large sequence sets with around million sequences. We classified two data sets in this regard of which the details are given below.

* 16S rRNA Sequences
    * -- This set contained a total of 1160946 16S sRNA sequences where 684769 of them were unique

* Fungi Sequences

    * -- This set contained a total of 957387 fungi sequences where 482158 of them were unique and we considered the ones with lengths greater than 200 resulting 446041 sequences.

* Fungi Phylogenetic Tree

    * -- We proposed a displaying method called Spherical Phylogram to display the phylogenetic tree in 3D space. The sequences includes the representative sequences found by clustering fungi sequences, and sequences from GenBank.


## Process

* The outline of the clustering process for a given sequence set is as follows (for more details see 16S rRNA Process or fungi process)

* Pick a sub set of sequences - called sample sequence set. We used 100K sequences in sample

* Perform pairwise alignment on 1. and produce a distance matrix

* Perform pairwise clustering and multidimensional scaling on 2. to produce a 3 dimensional view of the sample sequences with different coloring on clusters found from pairwise clustering program

* Refine the clusters found in 2. to form spatially compact regions - called Mega-regions aiming to get at most ~100K sequences in each Mega-region as processing time for larger samples was too great.

* Assign each remaining (the ones not in the sample sequence set) sequence approximately to a Mega-region based on the pairwise distance between the sequence and the sequence representing the centers of nodes of decomposed trees (see figure 1 below) in a Mega-region. This is extremely fast as can use hierarchical algorithm in 3D mapped space. The result is illustrated in figure 2 below.

* For each Mega-region of 5.

* Run pairwise alignment and produce distance matrix

* Run multidimensional scaling on 6.1

* Run pairwise clustering on 6.1

* Produce 3 dimensional view based on 6.2 and 6.

* If refinements are necessary for clustering repeat from step 6.3 for such clusters The visual depiction of clusters (mapped to 3D) makes it much easier to decide on reliability of results and decide when refinement is warranted. The final result of this is illustrated in figure 3 below

* Use Interpolative Joining algorithm to generate Spherical Phylogram as a phylogenetic tree in 3D dimension.

Note each step was run in parallel on a number of cores that depended on problem size but was up to 1000 cores in number.

## Dependence of results on sequence length

We also studied the effect of sequence length in final clustering results as presented under following links

* 16S rRNA length dependency explanation and gallery

* Fungi length dependency explanation and gallery

## Sequence Alignment

We used the local alignment algorithm, Smith-Waterman to align sequences. We also tried using global alignment with Needleman-Wunsch, but discontinued due to the reasons discussed here.

## 3D Visualizations

The pictures are screen snapshots of data displayed in a 3D visualizer. You can see the full 3D versions by downloading PlotViz found at download page and using it to open .pviz files labeled as "plot" of download sections.

## References

Yang Ruan, Geoffrey House, Saliya Ekanayake, Ursel Schütte, James D. Bever, Haixu Tang, Geoffrey Fox. Integration of Clustering and Multidimensional Scaling to Determine Phylogenetic Trees as Spherical Phylograms Visualized in 3 Dimensions. Proceedings of C4Bio 2014 of IEEE/ACM CCGrid 2014, Chicago, USA, May 26-29, 2014.


Yang Ruan, Geoffrey Fox. A Robust and Scalable Solution for Interpolative Multidimensional Scaling with Weighting. Proceedings of IEEE eScience 2013, Beijing, China, Oct. 22-Oct. 25, 2013. (Best Student Innovation Award)


Yang Ruan, Saliya Ekanayake, Mina Rho, Haixu Tang, Seung-Hee Bae, Judy Qiu, Geoffrey Fox. DACIDR: Deterministic Annealed Clustering with Interpolative Dimension Reduction using a Large Collection of 16S rRNA Sequences. Proceedings of ACM-BCB 2012, Orlando, Florida, ACM, Oct. 7-Oct. 10, 2012.


Yang Ruan, Zhenhua Guo, Yuduo Zhou, Judy Qiu, Geoffrey Fox. HyMR: a Hybrid MapReduce Workflow System. Proceedings of ECMLS’12 of ACM HPDC 2012, Delft, Netherlands, ACM, Jun. 18-Jun. 22, 2012


Adam Hughes, Yang Ruan, Saliya Ekanayake, Seung-Hee Bae, Qunfeng Dong, Mina Rho, Judy Qiu, Geoffrey Fox. Interpolative Multidimensional Scaling Techniques for the Identification of Clusters in Very Large Sequence Sets, BMC Bioinformatics 2012, 13(Suppl 2):S9.

## Technologies Used

* Twister

* MPI.NET

* Dimension Reduction with Deterministic Annealing SMACOF

* Dimension Reduction by Interpolation

* Clustering by Deterministic Annealing Pairwise Techniques

* Smith Waterman Gotoh Distance Computation

* NET Bio (formerly Microsoft Biology Foundation)


Work supported in part by the National Science Foundation under Grant No. 0910812 to Indiana University for "FutureGrid: An Experimental, High-Performance Grid Test-bed." Partners in the FutureGrid project include U. Chicago, U. Florida, San Diego Supercomputer Center - UC San Diego, U. Southern California, U. Texas at Austin, U. Tennessee at Knoxville, U. of Virginia, Purdue I., and T-U. Dresden. Work supported in part by Microsoft Research