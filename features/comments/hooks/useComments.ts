"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  commentsApi,
  type CommentResponse,
} from "../api/comment.api";

import type {
  CreateCommentDto,
} from "../dto/create-comment.dto";

import type {
  UpdateCommentDto,
} from "../dto/update-comment.dto";

import type {
  CommentTargetType,
} from "../entities/comment.entity";


export function useComments(
  targetType: CommentTargetType,
  targetId: string,
) {
  const [comments, setComments] =
    useState<CommentResponse[]>([]);

  const [loading, setLoading] =
    useState(true);


  const fetchComments =
    useCallback(async () => {
      setLoading(true);

      try {
        const data =
          await commentsApi.getByTarget(
            targetType,
            targetId,
          );

        setComments(data);

      } finally {
        setLoading(false);
      }

    }, [
      targetType,
      targetId,
    ]);


  useEffect(() => {
    fetchComments();
  }, [
    fetchComments,
  ]);


  const createComment =
    useCallback(
      async (
        dto: CreateCommentDto,
      ) => {
        const comment =
          await commentsApi.create(
            dto,
          );


        setComments(
          (current) => [
            ...current,
            comment,
          ],
        );


        return comment;

      },
      [],
    );


  const updateComment =
    useCallback(
      async (
        id: string,
        dto: UpdateCommentDto,
      ) => {
        const updated =
          await commentsApi.update(
            id,
            dto,
          );


        setComments(
          (current) =>
            current.map(
              (comment) =>
                comment.id === id
                  ? updated
                  : comment,
            ),
        );


        return updated;

      },
      [],
    );


  const deleteComment =
    useCallback(
      async (
        id: string,
      ) => {
        await commentsApi.delete(
          id,
        );


        setComments(
          (current) =>
            current.filter(
              (comment) =>
                comment.id !== id,
            ),
        );

      },
      [],
    );


  return {
    comments,
    loading,

    refresh:
      fetchComments,

    createComment,

    updateComment,

    deleteComment,
  };
}