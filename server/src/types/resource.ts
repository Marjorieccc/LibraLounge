import { Types } from "mongoose";

export type MediumModel = {
  _id: Types.ObjectId;
  format: string;
  publisher: string;
  language: string[];
  year_of_publication: number;
  return_date: Date | null;
  status: string;
};

export type ResourceModel = {
  _id: Types.ObjectId;
  title: string;
  thumbnail_url?: string;
  cover_url?: string;
  audience: string;
  category: string[];
  shortDescription?: string;
  longDescription?: string;
  medium: MediumModel[];
};

export type ResourceFilter = {
  _id: Types.ObjectId;
  name: string;
};

export type ResourceMongoQuery = {
  category?: {
    $in: string | string[];
  };
  medium?: {
    $elemMatch: {
      format?: { $in: string | string[] };
      language?: { $in: string | string[] };
    };
  };
  title?: {
    $regex: string | string[];
    $options: string;
  };
};
// model for resource reservation
export type ResourceRevModel = {
  _id: Types.ObjectId;
  userID: string;
  resourceID: string;
  mediumID: string;
  time: Date;
};
