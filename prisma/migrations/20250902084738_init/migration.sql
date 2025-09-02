-- CreateEnum
CREATE TYPE "public"."Plan" AS ENUM ('FREE', 'PREMIUM');

-- CreateEnum
CREATE TYPE "public"."SubscriptionStatus" AS ENUM ('ACTIVE', 'CANCELED', 'PAST_DUE', 'INCOMPLETE');

-- CreateEnum
CREATE TYPE "public"."ContentType" AS ENUM ('STRATEGY', 'AD_COPY', 'SOCIAL_MEDIA_POST', 'BLOG_POST');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "onboardingComplete" BOOLEAN NOT NULL DEFAULT false,
    "credits" INTEGER NOT NULL DEFAULT 10,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Subscription" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "plan" "public"."Plan" NOT NULL DEFAULT 'FREE',
    "status" "public"."SubscriptionStatus" NOT NULL DEFAULT 'INCOMPLETE',
    "currentPeriodStart" TIMESTAMP(3),
    "currentPeriodEnd" TIMESTAMP(3),
    "stripe_customer_id" TEXT,
    "stripe_subscription_id" TEXT,
    "stripe_price_id" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BusinessProfile" (
    "id" TEXT NOT NULL,
    "businessName" TEXT NOT NULL,
    "industry" TEXT,
    "targetAudience" TEXT,
    "toneOfVoice" TEXT NOT NULL DEFAULT 'Professional',
    "goals" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "BusinessProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."GeneratedContent" (
    "id" TEXT NOT NULL,
    "type" "public"."ContentType" NOT NULL,
    "prompt" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "GeneratedContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ContentAnalytics" (
    "id" TEXT NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "engagementRate" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "contentId" TEXT NOT NULL,

    CONSTRAINT "ContentAnalytics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_userId_key" ON "public"."Subscription"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_stripe_customer_id_key" ON "public"."Subscription"("stripe_customer_id");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_stripe_subscription_id_key" ON "public"."Subscription"("stripe_subscription_id");

-- CreateIndex
CREATE UNIQUE INDEX "BusinessProfile_userId_key" ON "public"."BusinessProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ContentAnalytics_contentId_key" ON "public"."ContentAnalytics"("contentId");

-- AddForeignKey
ALTER TABLE "public"."Subscription" ADD CONSTRAINT "Subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BusinessProfile" ADD CONSTRAINT "BusinessProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."GeneratedContent" ADD CONSTRAINT "GeneratedContent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ContentAnalytics" ADD CONSTRAINT "ContentAnalytics_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "public"."GeneratedContent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
