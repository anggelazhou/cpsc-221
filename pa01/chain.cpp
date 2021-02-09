#include "chain.h"
#include <cmath>
#include <iostream>

// PA1 functions

/**
 * Destroys the current Chain. This function should ensure that
 * memory does not leak on destruction of a chain.
 */
Chain::~Chain()
{
  clear();
}

/**
 * Inserts a new node after the node pointed to by p in the
 * chain (so p->next is the new node) and returns a pointer to
 * the newly created node.
 * If p is NULL, inserts a new head node to the chain.
 * This function **SHOULD** create a new Node and increase length_.
 *
 * @param p = The new node should be pointed to by p->next.
 *            If p is NULL, the new node becomes the head of the chain.
 * @param ndata = The data to be inserted.
 */
Chain::Node *Chain::insertAfter(Node *p, const Block &ndata)
{
  length_ = length_ + 1;
  Node *newNode = new Node(ndata);
  if (p == NULL)
  {
    head_ = newNode;
  }
  else
  {
    Node *pn = p->next;
    p->next = newNode;
    newNode->prev = p;
    if (pn != NULL)
    { // p is not a tail before
      pn->prev = newNode;
      newNode->next = pn;
    }
  }
  return newNode;
}

/**
 * Swaps the position in the chain of the two nodes pointed to
 * by p and q.
 * If p or q is NULL or p==q, do nothing.
 * Change the chain's head pointer if necessary.
 */
void Chain::swap(Node *p, Node *q)
{
  if (p == NULL || q == NULL || p == q)
  {
    return;
  }
  Node *pp = p->prev;
  Node *pn = p->next;
  Node *qp = q->prev;
  Node *qn = q->next;

  p->prev = p == qp ? q : qp;
  p->next = p == qn ? q : qn;
  q->prev = q == pp ? p : pp;
  q->next = q == pn ? p : pn;

  if (pp == NULL)
  {
    // *p node is head before
    head_ = q;
  }
  else
  {
    if (pp != q)
    {
      pp->next = q;
    }
  }
  if (pn != NULL)
  {
    if (pn != q)
    {
      pn->prev = q;
    }
  } // ELSE *p node is tail before

  if (qp == NULL)
  {
    // *q node is head before
    head_ = p;
  }
  else
  {
    if (qp != p)
    {
      qp->next = p;
    }
  }
  if (qn != NULL)
  {
    if (qn != p)
    {
      qn->prev = p;
    }
  } // ELSE *q node is tail before
  /*
  cout << "after swapped " << head_
		  << " --> " << head_->next
		  << " --> " << head_->next->next
		  << " --> " << head_->next->next->next
		  << " --> " << head_->next->next->next->next
		  << " --> " << head_->next->next->next->next->next
		  << endl;
  int a = -1;
  cin >> a;
  */
}

/**
 * Destroys all dynamically allocated memory associated with the
 * current Chain class.
 */
void Chain::clear()
{
  Node *curr = head_;
  Node *next;
  while (curr != NULL)
  {
    next = curr->next;
    delete curr;
    curr = next;
  }
  length_ = 0;
}

/**
 * Makes the current object into a copy of the parameter:
 * All member variables should have the same value as
 * those of other, but the memory should be completely
 * independent. This function is used in both the copy
 * constructor and the assignment operator for Chains.
 */
void Chain::copy(Chain const &other)
{
  Node* curr = other.head_;
  Node* clone = new Node(curr->data);
  head_ = clone;
  length_ = other.length_;
  curr = curr->next;
  while(curr != NULL) { 
    Node* prev = clone; 
    clone->next = new Node(curr->data);
    clone = clone->next; 
    clone->prev = prev;
    curr = curr->next;
  }
}

/* Modifies the current chain: 
 * 1) Find the node with the first (leftmost) block in the unscrambled
 *    image and move it to the head of the chain.
 *	This block is the one whose closest match (to the left) is the
 *	largest.  That is, the distance (using distanceTo) to this block 
 *	is big for all other blocks.
 *	For each block B, find the distanceTo B from every other block
 *	and take the minimum of these distances as B's "value".
 *	Choose the block B with the maximum value over all blocks and
 *	swap its node to the head of the chain.
 *
 * 2) Starting with the (just found) first block B, find the node with
 *    the block that is the closest match to follow B (to the right)
 *    among the remaining blocks, move (swap) it to follow B's node,
 *    then repeat to unscramble the chain/image.
 */
void Chain::unscramble()
{
  if (head_ == NULL)
  {
    return;
  }
  // find the first block
  double max = -1.0;
  double tmp = 0.0;
  Node *maxNode = NULL;
  Node *curr = head_;
  while (curr != NULL)
  {
    tmp = minDistanceFromOthers(curr);
    if (max < tmp)
    {
      max = tmp;
      maxNode = curr;
    }
    curr = curr->next;
  }
  swap(head_, maxNode);

  //repeatly find adjacent nodes from the 1st block
  curr = head_;
  while (curr != NULL && curr->next != NULL)
  {
    Node *nextPotentialRight = curr->next;
    Node *closestMatchRight = NULL;
    double min = 10.0;
    while (nextPotentialRight != NULL)
    {
      tmp = curr->data.distanceTo(nextPotentialRight->data);
      if (min > tmp)
      {
        min = tmp;
        closestMatchRight = nextPotentialRight;
      }
      nextPotentialRight = nextPotentialRight->next;
    }
    swap(curr->next, closestMatchRight);
    curr = curr->next;
  }
}

double Chain::minDistanceFromOthers(Node *p) const
{
  double min = 10.0;
  double tmp = 0.0;
  Node *curr = head_;
  while (curr != NULL)
  {
    if (curr != p)
    {
      tmp = curr->data.distanceTo(p->data);
      if (min > tmp)
      {
        min = tmp;
      }
    }
    curr = curr->next;
  }
  return min;
}
