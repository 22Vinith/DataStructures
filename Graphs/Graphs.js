// Graphs in JavaScript Data Structure
// A graph is a non-linear data structure consisting of nodes (also called vertices) and edges that connect these nodes. Graphs are used to represent networks like social media, computer networks, road maps, and much more.

// There are two main types of graphs:

// Directed Graph: The edges have a direction, i.e., an edge from vertex A to vertex B does not necessarily imply an edge from B to A.
// Undirected Graph: The edges do not have any direction, meaning if there is an edge between vertex A and vertex B, it goes both ways.
// Graphs can also be weighted (each edge has a weight) or unweighted (edges have no associated cost or weight).

// Key Terms:
// Vertex: A node in the graph.
// Edge: A connection between two vertices.
// Adjacent vertices: Two vertices are adjacent if they are connected by an edge.
// Path: A sequence of vertices where each adjacent pair is connected by an edge.
// Representation of Graphs
// Graphs can be represented in several ways in JavaScript:

// Adjacency Matrix: A 2D array where each cell (i, j) represents the presence or absence of an edge between vertex i and vertex j.
// Adjacency List: A more space-efficient representation where each vertex has a list of the vertices it is directly connected to.

//---------------------------------------------------------------------------------------------------------------------------------------------

// Depth-First Search (DFS) and Breadth-First Search (BFS) in JavaScript (Graph Data Structures)
// DFS and BFS are two common graph traversal algorithms that explore nodes and edges in different ways:

// DFS (Depth-First Search):

// Explores as far as possible along each branch before backtracking.
// DFS uses a stack (often implemented recursively with a call stack).
// It explores deeper into the graph first.
// BFS (Breadth-First Search):

// Explores all neighbors at the present depth level before moving on to nodes at the next depth level.
// BFS uses a queue.
// It explores wider across the graph level by level.