"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

import {
  Map,
  MapCategory,
  MapCategoryTitle,
  MapContent,
  MapItem,
  MapSource,
  MapTitle,
} from "./components/Map";
import {
  FieldReference,
  MutationReference,
  ObjectFieldReference,
  ObjectTypeReference,
  QueryReference,
  Reference,
  ReferenceLink,
  SourceReference,
  TypeReference,
} from "./components/Reference";
import {
  Field,
  FieldActions,
  FieldConnectionMarker,
  FieldDeprecation,
  FieldDescription,
  FieldHeader,
  FieldHeaderPermalink,
  FieldHeaderSeparator,
  Fields,
} from "./components/Field";

export default function Home() {
  return (
    <SidebarProvider>
      <TooltipProvider>
        <Sidebar className="font-[family-name:var(--font-inter)]">
          {/* <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Mutations</SidebarGroupLabel>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Objects</SidebarGroupLabel>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Queries</SidebarGroupLabel>
            </SidebarGroup>
          </SidebarContent> */}
        </Sidebar>

        <main className="grid grid-cols-2 gap-12 w-full p-20 font-[family-name:var(--font-inter)]">
          <div className="col-span-1">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
              Post
            </h1>
            <p>
              The <Reference size="inline">Post</Reference> type represents a
              single entry in the content management system, encapsulating
              details such as the post's unique identifier, its content, and
              related comments.
            </p>

            <div className="my-8" />

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Fields
            </h3>
            <Fields>
              <Field>
                <FieldHeader>
                  <FieldHeaderPermalink name="id" />
                  <FieldReference weight="strong">id</FieldReference>
                  <FieldHeaderSeparator />
                  <TypeReference weight="subtle">ID!</TypeReference>
                </FieldHeader>
                <FieldDescription>
                  The unique identifier for the post.
                </FieldDescription>
              </Field>

              <Field>
                <FieldHeader>
                  <FieldHeaderPermalink name="comments" />
                  <FieldReference weight="strong">comments</FieldReference>
                  <FieldConnectionMarker />
                  <FieldHeaderSeparator />
                  <ObjectTypeReference weight="subtle">
                    CommentsConnection!
                  </ObjectTypeReference>
                </FieldHeader>
                <FieldDescription>
                  A connection containing the comments associated with the post.
                  Comments can also be accessed through the{" "}
                  <QueryReference size="inline">comments</QueryReference> query
                  and can be created using the{" "}
                  <MutationReference size="inline">
                    commentCreate
                  </MutationReference>{" "}
                  mutation.
                </FieldDescription>
                <FieldActions>
                  <Collapsible className="group/collapsible">
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Plus className="w-4 h-4 group-data-[state=open]/collapsible:rotate-45 transition-all" />
                        Show fields
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="border-border border-l mt-5 ml-1 pl-3">
                        <Fields>
                          <Field>
                            <FieldHeader>
                              <FieldReference>id</FieldReference>
                              <FieldHeaderSeparator />
                              <TypeReference weight="subtle">ID!</TypeReference>
                            </FieldHeader>
                            <FieldDescription>
                              The unique identifier for the comment.
                            </FieldDescription>
                          </Field>
                        </Fields>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </FieldActions>
              </Field>

              <Field>
                <FieldHeader>
                  <FieldHeaderPermalink name="content" />
                  <FieldReference>content</FieldReference>
                  <FieldHeaderSeparator />
                  <TypeReference weight="subtle">String!</TypeReference>
                </FieldHeader>
                <FieldDescription>
                  The main body of the post, containing its textual content.
                </FieldDescription>
              </Field>

              <Field>
                <FieldHeader>
                  <FieldHeaderPermalink name="created" />
                  <FieldReference>created</FieldReference>
                  <FieldHeaderSeparator />
                  <TypeReference weight="subtle">DateTime!</TypeReference>
                  <FieldDeprecation />
                </FieldHeader>
                <FieldDescription>
                  A timestamp representing the date and time when the post was
                  created. This field is deprecated; please use{" "}
                  <Reference size="inline">createdAt</Reference> instead.
                </FieldDescription>
              </Field>

              <Field>
                <FieldHeader>
                  <FieldHeaderPermalink name="createdAt" />
                  <FieldReference>createdAt</FieldReference>
                  <FieldHeaderSeparator />
                  <TypeReference weight="subtle">DateTime!</TypeReference>
                </FieldHeader>
                <FieldDescription>
                  A timestamp representing the date and time when the post was
                  created.
                </FieldDescription>
              </Field>
            </Fields>
          </div>

          <div className="col-span-1">
            <Map className="sticky top-0">
              <MapTitle>Map</MapTitle>
              <MapContent>
                <MapCategory>
                  <MapCategoryTitle>Fields and connections</MapCategoryTitle>
                  <ul>
                    <MapItem>
                      <ObjectFieldReference
                        object="PredictiveSearchResult"
                        field="posts"
                      />
                    </MapItem>
                    <MapItem>
                      <ObjectFieldReference object="User" field="posts" />
                    </MapItem>
                  </ul>
                </MapCategory>

                <MapCategory>
                  <MapCategoryTitle>Possible types in</MapCategoryTitle>
                  <ul>
                    <MapItem>
                      <TypeReference background="plain">
                        <ReferenceLink href="#">MenuItemResource</ReferenceLink>
                      </TypeReference>
                    </MapItem>
                  </ul>
                </MapCategory>

                <MapSource>
                  <SourceReference>Post</SourceReference>
                </MapSource>
              </MapContent>
            </Map>
          </div>
        </main>
      </TooltipProvider>
    </SidebarProvider>
  );
}
