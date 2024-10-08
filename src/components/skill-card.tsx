import { Card, CardBody, Typography } from "@material-tailwind/react";

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-yellow-800 p-2.5 text-white shadow">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-yellow-800">
          {title}
        </Typography>
        <Typography className="px-8 font-normal !text-gray-800">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default SkillCard;
