"use client";

import { use } from "react";

import { useProject } from "@/features/projects/hooks/useProject";

import { useComments } from "@/features/comments/hooks/useComments";

import { CommentList } from "@/features/comments/components/comment-list";
import { CommentForm } from "@/features/comments/components/comment-form";


type Props = {
  params: Promise<{
    id: string;
  }>;
};


export default function ProjectDetailPage({
  params,
}: Props) {
  const { id } = use(params);


  const {
    project,
    loading,
  } = useProject({
    id,
  });


  const {
    comments,
    loading: commentsLoading,
    createComment,
  } = useComments(
    "PROJECT",
    id,
  );


  if (loading) {
    return (
      <main className="p-6">
        Loading project...
      </main>
    );
  }


  if (!project) {
    return (
      <main className="p-6">
        Project not found.
      </main>
    );
  }


  const currentProject = project;


  async function handleCreateComment(
    content: string,
  ) {
    await createComment({
      targetType:
        "PROJECT",

      targetId:
        currentProject.id,

      parentCommentId:
        null,

      content,
    });
  }

  return (
    <main className="space-y-4 p-6">

      <header>
        <h1 className="text-2xl font-bold">
          {project.name}
        </h1>

        <p className="text-sm text-gray-600">
          {project.description ??
            "No description"}
        </p>
      </header>


      <section className="rounded-lg border p-4">
        <p>
          Status: {project.status}
        </p>

        <p>
          Created:
          {" "}
          {new Date(
            project.createdAt,
          ).toLocaleDateString()}
        </p>
      </section>


      <section className="space-y-4 rounded-lg border p-4">

        <h2 className="text-lg font-semibold">
          Comments
        </h2>


        <CommentForm
          onSubmit={
            handleCreateComment
          }
        />


        {
          commentsLoading
            ? (
              <p>
                Loading comments...
              </p>
            )
            : (
              <CommentList
                comments={comments}
              />
            )
        }

      </section>

    </main>
  );
}